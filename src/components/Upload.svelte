<script>
    import {
        createEventDispatcher
    } from 'svelte'
    import {
        tweened
    } from 'svelte/motion'
    import {
        sineIn
    } from 'svelte/easing'
    import {
        slide
    } from 'svelte/transition'
    import filesize from './_filesize'

    const dispatch = createEventDispatcher()

    let fileInput
    let dropArea
    let files = []
    $: console.log(files)
    const extToColor = ext => {
        let hash = 0
        let color = '#'
        for (let i = 0; i < ext.length; i++) {
            hash = ext.charCodeAt(i) + ((hash << 5) - hash)
        }
        for (let i = 0; i < 3; i++) {
            let subStr = '00' + (hash >> (i * 2)).toString(16)
            color += subStr.substr(-2, subStr.length)
        }
        return color
    }
    const completed = () => dispatch('uploadCompleted', {})

    const uploadProgress = (fileNumber, e) => {
        files[fileNumber].progress = Math.round(e.loaded / e.total * 1000) / 10
        files = files
    }
    const dragEnter = e => {
        dropArea.style.background = 'rgba(0, 0, 0, 0.03137254901960784)'
        dropArea.style.borderColor = '#d4d7da'
    }
    const dragLeave = e => {
        dropArea.style = ''
    }
    const dragOver = e => {
        dropArea.style.background = 'rgba(0, 0, 0, 0.03137254901960784)'
        dropArea.style.borderColor = '#d4d7da'
    }
    const dropHandle = e => {
        dropArea.style = ''
        let dt = e.dataTransfer
        let filesData = dt.files
        handleFiles(filesData)
    }
    const handleFiles = filesData => {
        if (filesData) {
            filesData = [...filesData]
            filesData.forEach(file => {
                //if file.name doesnt exist
                files = [...files, {
                    name: file.name,
                    size: filesize(file.size),
                    extension: file.name.split('.').pop(),
                    color: extToColor(file.name.split('.').pop()),
                    status: false,
                    progress: 0
                }]
                uploadFile(file, files.length - 1)
                // previewFile(file)
            })
        }
    }
    const uploadFile = (file, i) => {
        let url = '/products/upload'
        let xhr = new XMLHttpRequest()
        let formData = new FormData()

        xhr.upload.addEventListener('progress', e => uploadProgress(i, e))
        xhr.upload.addEventListener('readystatechange', e => {
            if (xhr.readyState == 4 && xhr.status == 200) files[i].status = JSON.parse(xhr.responseText).id
            else if (xhr.readyState == 4 && xhr.status != 200) files[i].status = JSON.parse(xhr
                .responseText).error
        })
        xhr.open('POST', url, true)
        formData.append('file', file)
        xhr.send(formData)
    }
</script>

<div class="uploader p-5" bind:this={dropArea} on:dragenter|preventDefault={dragEnter}
    on:dragleave|preventDefault={dragLeave} on:dragover|preventDefault={dragOver} on:drop|preventDefault={dropHandle}>
    <input name="media" type="file" multiple on:change={handleFiles(fileInput.files)} bind:this={fileInput}>
    <div class="p-3 uploader-icon">
        <div class="uploader-icon-circle">
            <img class="mb-5 circle" src="https://via.placeholder.com/150" style="border-radius: 50%"
                alt="draSha circle">
        </div>
        <h3 class="uploader-caption">Drag &amp; drop files here</h3>
        <p>or</p>
        <button type="button" class="btn btn-secondary" on:click={fileInput.click()}>
            <span>Browse files</span>
        </button>
    </div>
</div>
<div class="files-card">
    <ul class="list-unstyled" id="files">
        {#each files as file, i (i)}
      <li class="file-item" transition:slide="{{delay: 20, duration: 300, easing: sineIn }}">
        <div class="file-item-thumbnail">
          <div style="background-color: {file.color}" class="file-item-icon"><i>{file.extension}</i></div>
        </div>
        <div class="file-item-body">
          <p class="m-0">{file.name}</p>
          {#if file && file.status === 'completed'}
            <input type="text" class="form-control" placeholder="Enter content name" />
          {:else}
            <span>{file.size}</span>
          {/if}
        </div>
        {#if file && file.status}
          <div class="file-item-status">
            <span class="text-muted">{file.status}</span>
          </div>
        {/if}
        {#if file && file.progress < 100}
          <div class="progress-panel">
            <div class="file-progress-bar" style="width: {file.progress}%"></div>
            <span>{file.progress}%</span>
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
	.p-3 {
		padding: 3em;
	}
.circle {
  width: 69px;
}
.uploader {
  cursor: default;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #fff;
  border: 2px dashed #ebeef1;
  border-radius: 14px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.uploader input[type="file"] {
  position: absolute;
  z-index: -9999;
  height: 0px;
  width: 0px;
  padding: 0px;
  margin: 0px;
  line-height: 0;
  outline: currentcolor none 0px;
  border: 0px none;
  opacity: 0;
}

.uploader .uploader-caption {
  font-size: 18px;
  font-weight: bold;
  color: #5b5b7b;
  margin-bottom: 10px;
}

.uploader p {
  margin: 0;
  padding: 0;
  color: #90a0bc;
  margin-bottom: 12px;
}

/* files */
#files {
  margin: 0;
}

#files .file-item {
  position: relative;
  margin: 0;
  padding: 20px;
  border: 1px solid #ebeef1;
  animation-duration: 0.6s;
  display: flex;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #fff;
}

#files .file-item-body {
  padding: 0 15px;
  flex: 1;
  z-index: 2;
  position: relative;
  line-height: 1.2;
  overflow: hidden;
}

#files .file-item-body p {
  width: 75%;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  color: #74809d;
}

#files .file-item-body span {
  font-size: 12px;
  color: #979fb8;
}

#files .file-item-icon {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e1e1e1;
}

#files .file-item-thumbnail {
  position: relative;
  width: 36px;
  height: 36px;
  z-index: 2;
}

/* #files .file-item-thumbnail i,
#files .file-item-thumbnail img {
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
} */

#files .file-item-thumbnail i {
  position: absolute;
  display: block;
  width: 90%;
  font-style: normal;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  color: #fff;
  font-size: 12px;
  text-align: center;
  text-shadow: 0px 0px 1px #222;
}

/* #files .file-item-thumbnail img {
  position: absolute;
  max-width: none;
  max-height: 100%;
  background: #fff;
} */

#files .progress-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

#files .progress-panel .file-progress-bar {
  width: 0%;
  height: 100%;
  background: rgba(104, 125, 219, 0.08);
  box-shadow: none;
}

#files .progress-panel span {
  position: absolute;
  right: 16px;
  color: rgba(151, 159, 184, 0.16);
  font-size: 48px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

#files .file-item-status i {
  font-size: 20px;
}


</style>