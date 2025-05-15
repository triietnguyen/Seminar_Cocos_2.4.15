cc.Class({
    extends: cc.Component,

    properties: {
        title: "",
        timeExcute: 0,
    },

    onLoad: function () {
        this.dependencies = [];
        this.executed = false;
    },

    init: function (title, timeExcute) {
        this.title = title;
        this.executed = false;
        this.dependencies = [];
        this.timeExcute = timeExcute;
    },

    wait: function (stores) {
        if (Array.isArray(stores)) {
            this.dependencies.push(...stores);
        } else {
            this.dependencies.push(stores);
        }
    },

    run: async function (stepTime) {
        if (this.executed) return;
        if (this.timeExcute > stepTime) return;

        for (const dep of this.dependencies) {
            if (dep.timeExcute > stepTime) {
                return false;
            }
            const depResult = await dep.run(stepTime);
            if (!depResult) return false;
        }

        this.executed = true;
        await this.execute(stepTime * 1000);
        this.node.active = false;
        return true;
    },

    async execute(ms) {
        console.log(`🔄 Đang chạy ${this.title}`);
        await new Promise((resolve) => setTimeout(resolve, ms));
        console.log(`✅ Hoàn thành ${this.title}`);
    },
});
