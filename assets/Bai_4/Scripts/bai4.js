cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        itemPrefab: cc.Prefab,
        autoBtn: cc.Button,
        popUpFailed: cc.Node,
        popUpSuccess: cc.Node,
        fadeOverlay: cc.Node,

    },

    init: function (i, time) {
        let item = cc.instantiate(this.itemPrefab);
        let title = item.getChildByName("title").getComponent(cc.Label);
        title.string = "Nhiệm vụ " + i;
        let compItem = item.getComponent("item");
        compItem.init("Nhiệm vụ " + i, time);
        this.content.addChild(item);
    },

    onLoad: function () {

        this.popUpFailed.active = false;
        this.popUpSuccess.active = false;
        this.init(1, 3);
        this.init(2, 3);
        this.init(3, 3);
        this.init(4, 3);
        this.init(5, 3);
        this.init(6, 3);
        this.init(7, 3);
        this.init(8, 3);
        this.init(9, 3);
        this.init(10, 3);
        this.button = this.popUpSuccess.getChildByName("CloseButton").getComponent(cc.Button)
        this.button.node.on('click', this.closePopUpSuccess, this)
    },

    start: function () { },

    showPopUpFailed() {
        this.popUpFailed.opacity = 0;
        this.popUpFailed.active = true;

        cc.tween(this.popUpFailed)
            .to(0.4, { opacity: 255 })
            .start();
    },

    closePopUpFailed() {
        cc.tween(this.popUpFailed)
            .to(0.4, { opacity: 0 })
            .call(() => {
                this.popUpFailed.active = false;

                this.fadeOverlay.active = true;
                this.fadeOverlay.opacity = 0;

                cc.tween(this.fadeOverlay)
                    .to(0.5, { opacity: 255 })
                    .call(() => {
                        cc.director.loadScene(cc.director.getScene().name);
                    })
                    .start();
            })
            .start();
    },

    showPopUpSucces() {
        this.popUpSuccess.opacity = 0;
        this.popUpSuccess.active = true;

        cc.tween(this.popUpSuccess)
            .to(0.4, { opacity: 255 })
            .start();
    },

    closePopUpSuccess() {
        cc.tween(this.popUpSuccess)
            .to(0.4, { opacity: 0 })
            .call(() => {
                this.popUpSuccess.active = false;

                this.fadeOverlay.active = true;
                this.fadeOverlay.opacity = 0;

                cc.tween(this.fadeOverlay)
                    .to(0.5, { opacity: 255 })
                    .call(() => {
                        cc.director.loadScene(cc.director.getScene().name);
                    })
                    .start();
            })
            .start();
    },


    autoClick: function () {
        this.autoBtn.node.active = false
        let mision1 = this.content.children[0].getComponent("item");
        let mision2 = this.content.children[1].getComponent("item");
        let mision3 = this.content.children[2].getComponent("item");
        let mision4 = this.content.children[3].getComponent("item");
        let mision5 = this.content.children[4].getComponent("item");
        let mision6 = this.content.children[5].getComponent("item");
        let mision7 = this.content.children[6].getComponent("item");
        let mision8 = this.content.children[7].getComponent("item");
        let mision9 = this.content.children[8].getComponent("item");
        let mision10 = this.content.children[9].getComponent("item");

        mision10.wait([mision9, mision6, mision2]);
        mision9.wait([mision8, mision7]);
        mision6.wait([mision4, mision5]);
        mision4.wait(mision3);
        mision2.wait(mision1);

        this.contribute(3, mision10);

    },

    // contribute: async function (stepTime, ...stores) {
    //     for (const store of stores) {
    //         await store.run(stepTime);
    //     }
    //     complete = true;
    //     for (const store of stores) {
    //         if (store.executed == false) {

    //             complete = false;
    //             this.showPopUpFailed();
    //             return
    //         }
    //     }
    //     if (complete == true) {
    //         this.showPopUpSucces();
    //     } else {
    //         this.showPopUpFailed();
    //     }

    // },

    contribute: async function (stepTime, ...stores) {
    let complete = true;
    for (const store of stores) {
        const result = await store.run(stepTime);
        if (!result) {
            complete = false;
        }
    }
    if (complete) {
        this.showPopUpSucces();
    } else {
        this.showPopUpFailed();
    }
},


    update: function (dt) { },
});