<template>
    <div class="header">
        <nav id="nav">
            <div>
                <router-link to="/" class="logo">
                    <img alt="logo" src="@/assets/logo.png">
                    <span>Craftable</span>
                </router-link>
            </div>

            <ul :class="{ active: menu, 'top-level': true }">
                <li>
                    <router-link to="/about">
                        <font-awesome icon="user-circle" fixed-width />
                        About
                    </router-link>
                </li>

                <li>
                    <span @click="open_programming = !open_programming">
                        <font-awesome icon="code" fixed-width />
                        Programming
                    </span>
                    <ul :class="{ active: open_mc, 'top-level': true}">
                        <li>
                            <router-link to="/java/minecraft">
                                Minecraft
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/java/library">
                                Java Library
                            </router-link>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="https://twitter.com/Siroshun09" target="_blank">
                        <font-awesome :icon="['fab', 'twitter']" fixed-width />
                        Twitter
                    </a>
                </li>

                <li>
                    <a href="https://github.com/Siroshun09" target="_blank">
                        <font-awesome :icon="['fab', 'github']" fixed-width />
                        GitHub
                    </a>
                </li>

            </ul>

            <button id="nav-menu-toggle" @click="menu = !menu">
                <font-awesome icon="bars" />
            </button>

            <transition name="fade">
                <div id="nav-focus" class="overlay-focus" v-if="menu" @click="menu = !menu" />
            </transition>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: false,
                open_programming: false,
            };
        },
        watch: {
            $route() {
                this.menu = false;
                this.open_programming = false;
            },
        },
    }
</script>

<style scoped lang="scss">
#header {
    border-bottom: thin solid $border;
}

#nav-menu-toggle {
    @include breakpoint($sm) {
        display: none;
    }

    @include breakpoint($xs) {
        position: absolute;
        background: transparent;
        color: $brand-color;
        height: 3rem;
        width: 3rem;
        font-size: 2.5rem;
        border: 0;
        right: 0em;
        margin-right: 0.5em;
    }
}

#nav {
    padding: 0.25em;
    z-index: 100;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, .25);
    display: flex;
    background-color: $header-background;
     justify-content: space-between;

    @include breakpoint($xs) {
        justify-content: space-between;
    }

    .logo {
        display: flex;
        align-items: center;
        height: 2.0em;
        padding: 0.1em;
        padding-right: 0.25em;

        color: $header-title;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.5rem;

        &:hover {
            color: $header-title-hover;
            background-color: $header-background-hover;
        }

        img {
            height: 100%;
            width: auto;
            margin: 0.25em;
        }

        span {
            letter-spacing: 0.05em;
        }
    }

    ul {
        background: $header-background;
        display: flex;
        position: absolute;
        flex-direction: column;

        margin: 0;
        padding: 0;
        top: 4rem;
        bottom: 0;
        right: -100%;
        width: 100%;
        max-width: 20rem;
        z-index: 100;
        list-style: none;
        transition: right .2s;

        @include breakpoint($sm) {
            flex-direction: row;
            position: relative;
            max-width: unset;
            width: auto;
            top: unset;
            right: unset;
            background: transparent;
            padding-left: 0.5em;
        }

        &.active {
            @include breakpoint($xs) {
                transition: all .2s;
                right: 0;
                display: initial;
                border-left: thin solid rgba(0, 0, 0, .25);
            }
        }

        &.top-level:not(.active) {
            @include breakpoint($xs) {
                transition: all .2s;
                display: none;
            }
        }

        li {
            display: flex;
            position: relative;
            flex-direction: column;

            @include breakpoint($sm) {
                flex-direction: row;
            }

            a,
            span {
                color: $brand-color;
                display: flex;
                align-items: center;
                font-size: 1.5rem;
                font-weight: bold;
                text-decoration: none;
                transition: all .2s;
                width: 100%;
                padding: .5em 1em;

                @include breakpoint($sm) {
                    font-size: 1.25rem;
                }

                svg {
                    margin-right: 0.25em;
                    opacity: .5;
                }

                &:hover {
                    background-color: $header-background-hover;
                }

            }

            >ul {
                position: relative;
                top: 0em;
                bottom: auto;
                left: 0em;
                right: auto;
                padding-left: 0em;

                &.active {
                    @include breakpoint($xs) {
                        right: 0;
                        display: initial;
                        border-left: thin solid rgba(0, 0, 0, .25);
                    }
                }

                &.top-level:not(.active) {
                    @include breakpoint($xs) {
                        display: none;
                    }
                }

                >li {
                    @include breakpoint($xs) {
                        border-left: 1ex solid $brand-color;
                    }
                }

                @include breakpoint($sm) {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    flex-direction: column;
                    min-width: 100%;
                    background: $header-background;
                    z-index: 100;
                    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);

                    li {
                        &:hover {
                            background-color: $header-background-hover;
                        }
                    }

                    a {
                        width: 100%;
                    }
                }
            }

            @include breakpoint($sm) {
                &:hover {
                    ul {
                        display: flex;
                    }
                }
            }
        }
    }
}
</style>