<template>
  <div class="popup-action add-box">
    <div class="popup-mask"></div>
    <div class="content">
      <img src="../assets/close-icon.png" alt="" width="25" height="25" @click="CloseAdd()">
      <div class="action-box">
        <h3>Are you sure you want to delete it?</h3>
        <button @click="CloseAdd()" class="delete-btn margin-right">Cancel</button>
        <button class="delete-btn" @click="DeleteData()">Yes</button>
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


  @Emit('close')
  private CloseAdd() {
    // close action
  }

  @Emit('refresh') send() {}
  private DeleteData() {
    let params = {
      request: 4,
      data: {
        id: this.item.ID
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
  }
}
</script>
