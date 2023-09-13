<template>
  <div id="language-selector-component">
    <select>
      <option>DE</option>
      <option>TR</option>
      <option>EN</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LanguageSelectorComponent",
}
</script>

<style scoped>
select, option{
  background-color: #cbcbcb;
  padding:4px 8px;
  font-size: 14px;
  font-weight: bold;
  border:0;
  border-radius:4px;
}

option{
  background-color: transparent !important;
}
</style>