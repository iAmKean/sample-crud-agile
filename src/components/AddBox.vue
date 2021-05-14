<template>
  <div class="popup-action add-box">
    <div class="popup-mask"></div>
    <div class="content">
        <img src="../assets/close-icon.png" alt="" width="25" height="25" @click="CloseAdd()">
        <div class="action-box">
            <h3>New Item</h3>
            <input type="text" v-model="item" placeholder="Enter value">
            <button @click="SetData()">Save</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class AddBox extends Vue {
  private item: string = '';


  @Emit('close')
  private CloseAdd() {
    // close action
  }

  @Emit('refresh') send() {}
  private SetData() {
    if (this.item) {
      let params = {
        request: 2,
        data: {
          item: this.item
        }
      };

      this.$http.post(this.$api.AgileService, params)
        .then((res: any) => {
          this.CloseAdd();
          this.send();
          this.item = '';
        })
        .catch((error: any) => {
          console.log(error);
        });
    } else {
      alert("Please enter value")
    }
  }
}
</script>
