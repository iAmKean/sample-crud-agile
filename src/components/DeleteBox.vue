<template>
  <div class="popup-action add-box">
    <div class="popup-mask"></div>
    <div class="content">
      <img src="../assets/close-icon.png" alt="" width="25" height="25" @click="CloseAdd()">
      <div class="action-box">
        <h3>Are you sure you want to delete it?</h3>
        <button @click="CloseAdd()" class="delete-btn margin-right">Cancel</button>
        <button class="delete-btn">Yes</button>
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
}
</script>
