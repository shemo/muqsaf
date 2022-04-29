<template>
  <div
    id="testApp
"
  >
    <metainfo>
      <template v-slot:title="{ content }">{{ content }} - المقصف</template>
      <template v-slot:discription="{ metainfo }">{{
        metainfo.description
      }}</template>
    </metainfo>

    <router-view />
    <notifications position="top right" />
  </div>
</template>
<script>
import { watchEffect } from "vue";
import { useMeta } from "vue-meta";

export default {
  setup() {
    // Add meta info
    // The object passed into useMeta is user configurable
    const { meta } = useMeta({
      title: "المقصف",
    });

    watchEffect(() => {
      meta.description = "Shop main app";
    });

    // // Or use a computed prop
    // const computedMeta = computed(() => ({
    //   title: "My Title",
    //   description: `Counted ${counter.value} times`
    // }));

    // const { meta, onRemoved } = useMeta(computedMeta);

    // onRemoved(() => {
    //   // Do something as soon as this metadata is removed,
    //   // eg because the component instance was destroyed
    // });

    // // Get the currently used metainfo
    // const metadata = useActiveMeta();

    // watch(metadata, newValue => {
    //   // metadata was updated, do something
    // });
  },
  components: {},
};
</script>
