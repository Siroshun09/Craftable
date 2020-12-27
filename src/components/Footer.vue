<template>
    <div id='footer'>
        <small>
            Copyright © {{new Date().getFullYear().toString()}} <a href="https://github.com/Siroshun09">Siroshun09</a>
        </small>
        <br />
        <small xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#" class="license-text">
            <a rel="cc:attributionURL" property="dct:title" href="siroshun09.github.io">Craftable</a> is licensed under 
            <a rel="license" href="https://github.com/Siroshun09/Craftable/blob/master/LICENSE">
                CC BY-SA 4.0
                <img alt="cc" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                    src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" />
                <img alt="by" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                    src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" />
                <img alt="sa" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
                    src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" />
            </a>
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