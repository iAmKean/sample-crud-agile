<template>
  <div class="home">
    <div class="item-wrapper">
      <h1>Agile Software Development</h1>
      <h2>Core and Principles</h2>
      <div class="item-list">
        <ul>
          <li v-for="(item, index) in 20" :key="index">
            <p>
              {{ 'Core and Principles Core and Principles Core and Principles Core and Principles Core and Principles Core and Principles Core and Principles Core and Principles Core and Principles Core and Principles' }}
            </p>
            <img src="../assets/edit-icon.png" class="img-edit" alt="" width="35" height="35" @click="Edit(item)">
            <img src="../assets/delete-icon.png" class="img-delete" alt="" width="35" height="35" @click="Delete(item)">
          </li>
        </ul>
      </div>
    </div>

    <!-- Add box -->
    <AddBox
      v-show="showAdd"
      @close="showAdd = false"/>
    <!-- end -->

    <!-- edit box -->
    <EditBox
      v-show="showEdit"
      @close="showEdit = false"/>
    <!-- end -->

    <!-- delete box -->
    <DeleteBox
      v-show="showDelete"
      @close="showDelete = false"/>
    <!-- end -->

    <!-- Add button -->
    <div class="fix-add-button">
      <img src="../assets/add-icon.png" alt="" width="75" height="75" @click="showAdd = true">
    </div>
    <!-- end -->

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AddBox from '@/components/AddBox.vue';
import EditBox from '@/components/EditBox.vue';
import DeleteBox from '@/components/DeleteBox.vue';

@Component({
  components: {
    AddBox,
    EditBox,
    DeleteBox
  },
})
export default class Home extends Vue {
  private item: string = '';
  private showAdd: boolean = false;
  private showEdit: boolean = false;
  private showDelete: boolean = false;
  private itemList: any[] = [
    1, 2, 3
  ];


  private Edit(item: any) {
    this.showEdit = true;
  }

  private Delete(item: any) {
    this.showDelete = true;
  }

  private created() {}

  private mounted() {}

}
</script>

<style>
.item-list ul {
  padding: 0px 100px 0px 20px;
}

.item-list ul li {
  list-style: none;
  text-align: left;
  position: relative;
  min-height: 50px;
  line-height: 50px;
  font-size: 14px;
  padding: 0px 110px 0px 110px;
}

.item-list ul li:not(:last-child) {
  margin-bottom: 10px;
} 

.item-list ul li p {
  overflow: hidden;
  line-height: 1.5;
  word-break: break-all;
  margin: 0;
}

.item-list ul li img {
  position: absolute;
  right: 0;
  top: 5px;
}

.item-list ul li img.img-edit {
  right: 45px;
}

.popup-action {
  border: 1px solid #ccc;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

.popup-action .popup-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #ccc;
  opacity: 0.5;
}

.popup-action .content {
  position: relative;
  height: 210px;
  width: 450px;
  margin: 10% auto;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  display: flex;
}

.popup-action img {
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}

.popup-action .action-box {
  height: 100%;
  width: 100%;
}

.popup-action .action-box h3 {
  margin-top: 20px;
  display: block;
}

.popup-action .action-box input {
  display: block;
  width: 80%;
  margin: 0 auto;
  height: 50px;
  font-size: 16px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 5px 10px;
}

.popup-action .action-box button {
  display: block;
  width: 50%;
  height: 50px;
  margin: 10px auto 0;
}

.popup-action .action-box button.delete-btn {
  display: inline-block;
  margin-top: 25px;
  width: calc(50% - 20px);
}

.popup-action .action-box button.delete-btn.margin-right {
  margin-right: 10px;
}

.fix-add-button {
  cursor: pointer;
  position: fixed;
  bottom: 10px;
  left: 20px;
}
</style>