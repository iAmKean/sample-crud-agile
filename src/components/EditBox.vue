<template>
  <div class="popup-action add-box">
    <div class="popup-mask"></div>
    <div class="content">
      <img src="../assets/close-icon.png" alt="" width="25" height="25" @click="CloseAdd()">
      <div class="action-box">
        <h3>Modify Item</h3>
        <input type="text" v-model="text" placeholder="Enter value">
        <button @click="UpdateData()">Update</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';


@Component({
  components: {},
})
export default class AddBox extends Vue {
  @Prop({type: Object, default: () => { {} } }) public readonly item!: any;
  private text: any = '';

  @Emit('close')
  private CloseAdd() {
    // close action
  }

  @Emit('refresh') send() {}
  private UpdateData() {
    if (this.text) {
      let params = {
        request: 3,
        data: {
          id:  this.item.ID,
          item: this.text,
        }
      };

      this.$http.post(this.$api.AgileService, params)
        .then((res: any) => {
          this.CloseAdd();
          this.send();
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      alert("Please enter value")
    }
  }

  private created() {
    this.text = this.item.Item;
  }

}
</script>
