<template>
  <div id="footer">
    <small>
      Copyright © 2020-2021
      <a href="https://github.com/Siroshun09">Siroshun09</a>
    </small>
    <br />
    <small
      xmlns:dct="http://purl.org/dc/terms/"
      xmlns:cc="http://creativecommons.org/ns#"
      class="license-text"
    >
      <a
        rel="cc:attributionURL"
        property="dct:title"
        href="https://siroshun09.github.io"
        >Craftable</a
      >
      is licensed under
      <a
        rel="license"
        href="https://github.com/Siroshun09/Craftable/blob/master/LICENSE"
      >
        CC BY-SA 4.0
      </a>
      .
    </small>
  </div>
</template>

<style lang="scss">
#footer {
  padding: 0.3em 1em;
  position: relative;
  font-size: 1.2em;
  flex: 0 0 auto;
  height: auto;
  width: 100%;
  border-top: 0.1em solid #999999;
  text-align: center;

  > small {
    > a {
      color: $link-color;
      text-decoration: none;
    }
  }
}
</style>
