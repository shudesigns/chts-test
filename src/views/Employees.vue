<template lang="pug">
  v-app#employees
    v-main
      .main-container.container

        // 工具列
        .topbar
          .topbar-inner.row
            .col-auto.topbar-title
              h1.topbar-title-txt 員工通訊錄
            .col-auto.topbar-tools
              ul.list-unstyled.row
                li.col.col-3
                  v-btn.topbar-add(rounded, depressed, :color="accentColor", dark, @click="dialogEdit = true") 新增
                li.col.col-9
                  v-text-field.topbar-search(
                    v-model="search",
                    append-icon="mdi-magnify",
                    label="搜尋...",
                    filled, dense, rounded, single-line,
                    hide-details)

        // 表格
        v-data-table(
          v-if="items != null",
          :headers="headers",
          :page.sync="page",
          hide-default-footer,
          :items="items",
          :items-per-page="20",
          @page-count="pageCount = $event",
          :search="search",
          no-data-text="無資料",
          no-results-text="沒有相符的資料",
          sort-by="id",
          mobile-breakpoint="600")
          template(v-slot:item.email="{item}")
            a(:href="'mailto:' + item.email", target="_blank") {{ item.email }}
          template(v-slot:item.tel="{item}")
            a(:href="'tel:' + item.tel", target="_blank") {{ item.tel }}
          template(v-slot:item.edit="{item}")
            v-btn.v-btn__modify(icon, @click="editItem('edit', item)") #[v-icon mdi-pencil]
            v-btn.v-btn__delete(icon, @click="editItem('delete', item)") #[v-icon mdi-delete]
        v-pagination.pagination(
          v-model="page",
          :length="pageCount")

    // 新增/編輯項目
    v-form(ref="editForm", v-model="valid")
      v-dialog(v-model="dialogEdit", max-width="600px")
        v-card.py-5
          v-card-title.pt-2 {{ dialogTitle }}
          v-card-text.py-2 
            v-row.my-n1
              v-col.py-1(cols="12", sm="6")
                v-text-field(
                  label="部門",
                  v-model="editedItem.department",
                  type="text",
                  name="department",
                  :rules="[rules.department]",
                  :counter="10",
                  required)
              v-col.py-1(cols="12", sm="6")
                v-text-field(
                  label="員工編號",
                  v-model="editedItem.id",
                  type="text",
                  name="id",
                  :rules="[rules.id.range, rules.id.duplicate]",
                  required)
              v-col.py-1(cols="12", sm="6")
                v-text-field(
                  label="姓名",
                  v-model="editedItem.name",
                  type="text",
                  name="name",
                  :rules="[rules.name]",
                  :counter="50",
                  required)
              v-col.py-1(cols="12", sm="6")
                v-text-field(
                  label="電話",
                  v-model="editedItem.tel",
                  type="tel",
                  name="tel",
                  :rules="[rules.tel]",
                  required)
              v-col.py-1(cols="12")
                v-text-field(
                  label="E-MAIL",
                  v-model="editedItem.email",
                  type="email",
                  name="email",
                  :rules="[rules.email]",
                  required)
          v-card-actions.justify-center
            v-btn(rounded, depressed, :color="accentColor", :dark="valid", @click="confirmSave", :disabled="!valid") 確定
            v-btn(rounded, depressed, @click="closeDialog('edit')") 取消

    // 刪除項目
    v-dialog(v-model="dialogDelete", max-width="300px")
      v-card.py-5
        v-card-title.justify-center.text-center.pt-2 是否刪除此項目？
        v-card-actions.justify-center
          v-btn(rounded, depressed, :color="accentColor", dark, @click="confirmDelete") 確定
          v-btn(rounded, depressed, @click="closeDialog('delete')") 取消
</template>

<style lang="sass" src="@/styles/employees.sass"></style>

<script>
import axios from 'axios'
export default {
  name: 'Employees',
  data() {
    return {
      accentColor: '#5d83ff',
      headers: [
        {
          text: '部門',
          sortable: false,
          value: 'department'
        },
        {
          text: '員工編號',
          sortable: false,
          value: 'id'
        },
        {
          text: '姓名',
          sortable: false,
          value: 'name'
        },
        {
          text: 'E-MAIL',
          sortable: false,
          value: 'email'
        },
        {
          text: '電話',
          sortable: false,
          value: 'tel'
        },
        {
          text: '編輯',
          sortable: false,
          value: 'edit',
          align: 'center'
        }
      ],
      items: null,
      page: 1,
      pageCount: 0,
      search: '',
      dialogEdit: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        department: '',
        id: '',
        name: '',
        email: '',
        tel: ''
      },
      defaultItem: {
        department: '',
        id: '',
        name: '',
        email: '',
        tel: ''
      },
      valid: true,
      rules: {
        department: val => val.length >= 2 && val.length <= 10 || '字元數限於2至10之間',
        id: {
          range: val => {
            const regex = /^B000[0-9]{2}$/
            return regex.test(val) || '員工編號格式錯誤'
          },
          duplicate: val => {
            if ( this.editedIndex === -1 || this.editedIndex > -1 && val != this.items[this.editedIndex].id ) {
              return this.items.every(x => x.id != val) || '此員工編號已存在'
            } else {
              return true
            }
          }
        },
        name: val => val.length >= 2 && val.length <= 50 || '字元數限於2至50之間',
        tel: val => {
          const regex = /^[0-9]{10}$/
          return regex.test(val) || '電話格式錯誤'
        },
        email: val => {
          const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return regex.test(val) || 'E-MAIL格式錯誤'
        }
      }
    }
  },
  computed: {
    dialogTitle() {
      return this.editedIndex === -1 ? '新增資訊' : '編輯資訊'
    }
  },
  watch: {
    dialogEdit(val) {
      val || this.closeDialog('edit')
    },
    dialogDelete(val) {
      val || this.closeDialog('delete')
    }
  },
  methods: {
    closeDialog(dialog) {
      if ( dialog === 'edit' ) this.dialogEdit = false
      if ( dialog === 'delete' ) this.dialogDelete = false
      this.$nextTick(() => {
        this.editedIndex = -1
        this.editedItem = Object.assign({}, this.defaultItem)
        this.$refs.editForm.resetValidation()
      })
    },
    confirmSave() {
      if ( this.editedIndex > -1 ) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
      } else {
        this.items.push(this.editedItem)
      }
      this.closeDialog('edit')
    },
    editItem(dialog, item) {
      if ( dialog === 'edit' ) {
        this.dialogEdit = true
      }
      if ( dialog === 'delete' ) this.dialogDelete = true
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
    },
    confirmDelete() {
      this.items.splice(this.editedIndex, 1)
      this.closeDialog('delete')
    }
  },
  mounted() {
    axios.get('/data/employees.json').then(res => {
      this.items = res.data
    })
  }
}
</script>
