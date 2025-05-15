// Learn cc.Class:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        itemPrefab: cc.Prefab,
        autoBtn: cc.Button,
    },

    init: function (i) {
        let item = cc.instantiate(this.itemPrefab);
        let title = item.getChildByName("title").getComponent(cc.Label);
        title.string = "Nhiệm vụ " + i;
        let compItem = item.getComponent("item");
        compItem.init("Nhiệm vụ " + i);
        this.content.addChild(item);
    },

    onLoad: function () {
        this.init(4);
        this.init(5);
        this.init(2);
        this.init(3);
        this.init(1);
    },

    start: function () { },

    autoClick: function () {
        this.content.children[4]
            .getComponent("item")
            .wait(this.content.children[3].getComponent("item"));

        this.content.children[3]
            .getComponent("item")
            .wait(this.content.children[2].getComponent("item"));

        this.content.children[2]
            .getComponent("item")
            .wait(this.content.children[1].getComponent("item"));

        this.content.children[1]
            .getComponent("item")
            .wait(this.content.children[0].getComponent("item"));

        let store1 = this.content.children[4].getComponent("item");
        let store2 = this.content.children[2].getComponent("item");
        let store3 = this.content.children[3].getComponent("item");
        let store4 = this.content.children[0].getComponent("item");
        let store5 = this.content.children[1].getComponent("item");

        this.contribute(3, store1, store2, store3, store4, store5);
    },

    contribute: async function (stepTime, ...stores) {
        console.log(stepTime);
        console.log(stores);

        for (const store of stores) {
            store.executed = false;
        }

        for (const store of stores) {
            await store.run(stepTime);
        }
    },

    update: function (dt) { },
});
