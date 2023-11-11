import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o,c as s,a as d,d as t,b as h,w as n,e as i}from"./app-45c92b84.js";const c={},l={class:"hint-container tip"},_=d("p",{class:"hint-container-title"},"提示",-1),p=d("br",null,null,-1),b=i('<h2 id="消息事件" tabindex="-1"><a class="header-anchor" href="#消息事件" aria-hidden="true">#</a> 消息事件</h2><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>message_type</td><td>string</td><td>消息类型</td></tr><tr><td>sub_type</td><td>string</td><td>消息子类型</td></tr><tr><td>message_id</td><td>int64</td><td>消息 ID</td></tr><tr><td>user_id</td><td>int64</td><td>发送者 QQ 号</td></tr><tr><td>message</td><td>object</td><td>消息内容</td></tr><tr><td>raw_message</td><td>string</td><td>CQ 码格式消息</td></tr><tr><td>font</td><td>int32</td><td>字体</td></tr><tr><td>sender</td><td>object</td><td>发送人信息</td></tr><tr><td>group_id</td><td>int64</td><td>群号</td></tr><tr><td>target_id</td><td>int64</td><td>消息目标（私聊）</td></tr><tr><td>temp_source</td><td>int32</td><td>临时聊天来源（私聊）</td></tr><tr><td>peer_id</td><td>int64</td><td>消息接收者，群聊是群号，私聊时是目标QQ</td></tr></tbody></table><h2 id="私聊消息" tabindex="-1"><a class="header-anchor" href="#私聊消息" aria-hidden="true">#</a> 私聊消息</h2><p>当 <code>message_type</code> 为 <code>private</code> 时，表示收到了私聊消息。</p><h2 id="群消息" tabindex="-1"><a class="header-anchor" href="#群消息" aria-hidden="true">#</a> 群消息</h2><p>当 <code>message_type</code> 为 <code>group</code> 时，表示收到了群消息。</p><h2 id="快速回复" tabindex="-1"><a class="header-anchor" href="#快速回复" aria-hidden="true">#</a> 快速回复</h2><p>Shamrock 提供了快速回复的功能，可以在收到消息时快速回复消息。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>reply</td><td>string</td><td>回复内容</td></tr><tr><td>auto_escape</td><td>bool</td><td>是否自动转义</td></tr><tr><td>auto_reply</td><td>bool</td><td>是否自动回复到消息</td></tr></tbody></table><h2 id="快速操作" tabindex="-1"><a class="header-anchor" href="#快速操作" aria-hidden="true">#</a> 快速操作</h2><p>Shamrock 提供了快速操作的功能，可以在收到消息时快速执行操作。</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>reply</td><td>string</td><td>回复内容</td></tr><tr><td>auto_escape</td><td>bool</td><td>是否自动转义</td></tr><tr><td>at_sender</td><td>bool</td><td>是否 @发送者</td></tr><tr><td>delete</td><td>bool</td><td>是否撤回消息</td></tr><tr><td>kick</td><td>bool</td><td>是否踢出发送者</td></tr><tr><td>ban</td><td>bool</td><td>是否禁言发送者</td></tr><tr><td>ban_duration</td><td>int64</td><td>禁言时长(秒)</td></tr></tbody></table>',12);function u(m,g){const e=a("RouterLink");return o(),s("div",null,[d("div",l,[_,d("p",null,[t("所有上报事件都包含通用数据，详见 "),h(e,{to:"/general-data.html"},{default:n(()=>[t("通用数据")]),_:1}),t("。"),p,t(" 包含在通用数据中的字段不会在下面的表格中重复出现。")])]),b])}const x=r(c,[["render",u],["__file","message.html.vue"]]);export{x as default};
