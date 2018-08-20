<template>
   <div :class="{ 'fixed-bottom': to == 'bottom', 'fixed-top': to == 'top' }">
      <slot></slot>
   </div>
</template>

<script>
export default {
   name: 'fixed',

   props: {
      to: String
   }


}
</script>

<style lang="scss" scoped>

</style>

