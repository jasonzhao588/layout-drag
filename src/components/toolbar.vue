
<template>
  <div class="b-box p-4 mt-4">
    <button class="bg-gray-600 px-6 py-2 rounded text-white hover:bg-gray-700" @click="$emit('revoke')">
      撤销
    </button>
    <button class="bg-gray-600 px-6 py-2 rounded text-white hover:bg-gray-700 ml-4" @click="$emit('redo')">
      重做
    </button>
  </div>
</template>

<script>
export default {
  props: {

  },
  methods:{},
  created(){}
}
</script>

<style lang='stylus'>

</style>