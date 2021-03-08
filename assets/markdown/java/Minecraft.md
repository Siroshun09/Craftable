# Minecraft Plugins

## Spigot

### Hugs

[![GitHub](https://img.shields.io/badge/GitHub-Hugs-blue)](https://github.com/okocraft/Hugs) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/okocraft/Hugs) ![GitHub](https://img.shields.io/github/license/okocraft/Hugs?label=License)

エンティティをシフト右クリックしたり、`/hug <player>` で抱擁するプラグイン。

Spigot で更新停止されたもののハグ機能のみ実装した。

機能を削り軽量化していった結果、1 クラスだけのプラグイン (6kb) となった。

---

### Imperatrix

[![GitHub](https://img.shields.io/badge/GitHub-Imperatrix-blue)](https://github.com/okocraft/Imperatrix) ![GitHub](https://img.shields.io/github/license/okocraft/Imperatrix?label=License)

[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) の拡張。
おこ鯖。向けのプレースホルダーを提供している。

## Paper

### TimingsGenerator

[![GitHub](https://img.shields.io/badge/GitHub-TimingsGenerator-blue)](https://github.com/okocraft/TimingsGenerator) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/okocraft/TimingsGenerator) ![GitHub](https://img.shields.io/github/license/okocraft/TimingsGenerator?label=License)

定期的に `/timings report` を実行して負荷を後から確認できるようにするプラグイン。

## BungeeCord

### DiscordChatBridge

[![GitHub](https://img.shields.io/badge/GitHub-DiscordChatBridge-blue)](https://github.com/okocraft/DiscordChatBridge) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/okocraft/DiscordChatBridge) ![GitHub](https://img.shields.io/github/license/okocraft/DiscordChatBridge?label=License)

[LunaChat](https://github.com/ucchyocean/LunaChat/releases) と連携して、Discord と Minecraft で相互チャットできるようにするプラグイン。

---

## PunishmentNotifier

[![GitHub](https://img.shields.io/badge/GitHub-PunishmentNotifier-blue)](https://github.com/okocraft/PunishmentNotifier) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/okocraft/PunishmentNotifier) ![GitHub](https://img.shields.io/github/license/okocraft/PunishmentNotifier?label=License)

[AdvancedBan](https://github.com/DevLeoko/AdvancedBan) の処罰情報を、Discord (Webhook) や被処罰者に通知するプラグイン。
Discord には処罰の解除情報も送られる。

## Library

### MCMessage

[![GitHub](https://img.shields.io/badge/GitHub-MCMessage-blue)](https://github.com/Siroshun09/MCMessage) [![Latest Version](https://img.shields.io/bintray/v/siroshun09/maven/MCMessage?label=Latest)](https://bintray.com/siroshun09/maven/MCMessage/_latestVersion) ![GitHub](https://img.shields.io/github/license/Siroshun09/MCMessage?label=License) [![Bintray](https://img.shields.io/bintray/v/siroshun09/maven/MCMessage?color=orange&label=Javadoc)](https://siroshun09.github.io/MCMessage/)

プラットフォーム間でのメッセージ送信を共通化したり、プレイヤーの設定に合わせた言語のメッセージを送れるようにするライブラリ。

`&1` や `&#123456` のようなカラーコードを変換する機能や、メッセージの構築クラスもあります。

[MCCommand](https://github.com/Siroshun09/MCCommand) で各プラットフォームへの実装をしています。

---

### MCCommand

[![GitHub](https://img.shields.io/badge/GitHub-MCCommand-blue)](https://github.com/Siroshun09/MCCommand) [![Latest Version](https://img.shields.io/bintray/v/siroshun09/maven/MCCommand?label=Latest)](https://bintray.com/siroshun09/maven/MCCommand/_latestVersion) ![GitHub](https://img.shields.io/github/license/Siroshun09/MCCommand?label=License) [![Bintray](https://img.shields.io/bintray/v/siroshun09/maven/MCCommand?color=orange&label=Javadoc)](https://siroshun09.github.io/MCCommand/)

プラットフォーム別のコマンド処理を書く必要をなくすライブラリ。

また、Paper の非同期なタブ補完への登録, 引数のパーサー, サブコマンド検索など、あったらコードを減らせる機能が含まれています。
