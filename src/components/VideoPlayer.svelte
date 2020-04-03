<script>

</script>
<div class="video-container">
    <video src=""></video>
    <div class="controls">
        <button class="play">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
        </button>
        <button class="rewind">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="11 19 2 12 11 5 11 19"></polygon>
                <polygon points="22 19 13 12 22 5 22 19"></polygon>
            </svg>
        </button>
        <button class="fast-forward">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="13 19 22 12 13 5 13 19"></polygon>
                <polygon points="2 19 11 12 2 5 2 19"></polygon>
            </svg>
        </button>
        <button class="volume">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
        </button>
        <p> <span class="series"> Wonder Foundation</span> <span class="episode"> Big buck bunny</span></p>
        <button>Help</button>
        <button>Next</button>
        <button>Episodes</button>
        <button>Captions</button>
        <button>Full Screen</button>
    </div>
</div>
<style>
    .video-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .video-container video {
        width: 100%;
        height: 100%;
    }

    .video-container .controls {
        position: fixed;
        bottom: 0px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 4vmin;
        background: rgba(0, 0, 0, 0.5);
        align-items: center;
    }

    .video-container .controls button {
        background: none;
        outline: none;
        box-shadow: none;
        border: none;
        width: 5vw;
        height: 5vw;
        min-width: 50px;
        min-height: 50px;
        margin: 0px 1vw;
    }

    .video-container .controls button svg {
        fill: white;
        stroke: white;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        width: 100%;
        height: 100%;
    }

    .video-container .controls .title {
        font-family: sans-serif;
        font-size: 2vw;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .video-container .controls .title .series {
        color: #fefefe;
        font-weight: bold;
        font-size: 1em;

    }

    .video-container .controls .title .episode {
        color: #a1a1a1;
        font-size: 0.75em;
        padding-left: 1vw;
    }
</style>