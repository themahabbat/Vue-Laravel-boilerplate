<template>
    <div class="_spinner">
        <div class="_indicator"></div>
    </div>
</template>

<style lang="scss" scoped>
    ._spinner {
        z-index: 1000;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 5em;
        height: 5em;
        padding: 0.5em;
        background: var(--cyan);
        border-radius: 50%;
        display: grid;
        grid-template-columns: 100%;
        align-items: center;
        justify-content: center;

        ._indicator {
            width: 100%;
            height: 100%;
            border: 0.5em solid turquoise;
            border-top-color: transparent;
            border-bottom-color: transparent;
            border-radius: 50%;
            animation: 0.5s spin linear infinite;
        }

    }
</style>