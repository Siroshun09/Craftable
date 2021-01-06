<template>
  <div id="home">
    <div class=head>
      <img alt="Craftable image" src='@/assets/home_image.jpg'>
    </div>

    <div class=content>
      <h1>Craftable</h1>

      <p>ようこそ、Craftable へ。</p>

      <h2>Craftable とは</h2>
      <p>
        Craft + able, 単純に訳せば "作ることができる" でしょうか。
        <br />
        Minecraft が好きなので、そこから命名しました。
      </p>
      <p>自作のソフトウェアなどを記録していきます。</p>

      <h2>自己紹介</h2>
      <p>
        しろしゅん (Siroshun) です。
        <br />
        大体のアカウントでは Siroshun09 を ID にしています。
        <br />
        詳しいことは <router-link to="/about">About</router-link> に載せていますので気になる方は是非。
      </p>

      <h2>サイトについて</h2>
      <p>
        ソースコードは <a href="https://github.com/Siroshun09/Craftable">GitHub</a> で公開しています。
      </p>
      <p>
        ライセンス:
        <a href="https://github.com/Siroshun09/Craftable/blob/master/LICENSE">
          表示 - 継承 4.0 国際 | Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: null,
      title: 'Craftable',
    }
  },
}
</script>

<style scoped lang="scss">
#home {
  .head {
    position: relative;
    display: flex;
    z-index: 1;

    >img {
      height: 100%;
      width: 100%;
    }
  }

  .content {
    text-align: center;

    >h1 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 3.2rem;
      letter-spacing: 0.05rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    >h2 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 2.2rem;
      letter-spacing: 0.05rem;
      margin: 1rem;
    }

    >p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      >a {
        color: $link-color;
        text-decoration: none;
      }
    }
  }
}
</style>
