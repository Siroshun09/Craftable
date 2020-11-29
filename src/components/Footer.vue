<template>
    <div id='footer'>
        <small>
            Copyright © {{new Date().getFullYear().toString()}} <a href="https://github.com/Siroshun09">Siroshun09</a>
        </small>
        <small> | </small>
        <small>
            This site is licensed under a <a href="https://github.com/Siroshun09/Craftable/blob/master/LICENSE">Creative
                Commons Attribution 4.0 International License</a>.
        </small>
    </div>
</template>

<style lang="scss">
#footer {
    padding: .3em 1em;
    position: relative;
    font-size: 1.0em;
    flex: 0 0 auto;
    height: auto;
    width: 100%;
    text-decoration: none;
    border-top: 0.1em solid #999999;
    text-align: center;

    >small {
        >a {
            color: $brand-color;
        }
    }
}
</style>