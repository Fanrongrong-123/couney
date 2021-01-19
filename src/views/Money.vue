<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Notes/>
    <Tags :data-source.sync="tags"/>
    <Types/>
  </Layout>
</template>

<script>
import NumberPad from '@/components/Money/NumberPad'
import Notes from '@/components/Money/Notes'
import Tags from '@/components/Money/Tags'
import Types from '@/components/Money/Types'

export default {
  name: 'Money',
  components: { Types, Tags, Notes, NumberPad },
  data () {
    return {
      tags: ['衣', '食', '住', '行']
    }
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
