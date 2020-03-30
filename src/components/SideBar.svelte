<div class="container">
    <div class="navbar-header">
        <h1>TWA<span class="pink-color">TWA</span></h1>
        <p>Express yourself</p>
    </div>
    <div class="sidebar">
        <div class="main-elements">
            <a href="#" class="nav-link"><i class="fas fa-search"></i> Discover</a>
            <a href="#" class="nav-link"><i class="fas fa-fire"></i> Trending</a>
            <a href="#" class="nav-link">Following</a>

            <h4 class="playlist-header">Your videos</h4>
            <a href="#" class="nav-link"><i class="fas fa-heart"></i> Favourite</a>
            <a href="#" class="nav-link"><i class="fas fa-box"></i> my videos</a>
            <a href="#" class="nav-link"><i class="fas fa-history"></i> play history</a>

            <h4 class="playlist-header">My playlist</h4>
            <a href="#" class="nav-link"><i class="fas fa-list"></i> English songs</a>
            <a href="#" class="nav-link"><i class="fas fa-list"></i> Hindi Songs</a>
            <a href="#" class="nav-link"><i class="fas fa-list"></i> Pop music</a>
            <!-- todo: create div for images and for the channels  -->

            <h4 class="playlist-header">Channels</h4>
            <a href="#" class="nav-link">something</a>

            <h4 class="playlist-header">Popular Hashtags</h4>
            <a href="#" class="nav-link">something else</a>
            <h4 class="playlist-header">More from TWATWA</h4>
            <a href="#" class="nav-link"><i class="fas fa-gamepad"></i> Gaming</a>
            <a href="#" class="nav-link"><i class="fas fa-music"></i> Music</a>
            <hr>
            <a href="#" class="nav-link"><i class="fas fa-cog"></i> Settings</a>
        </div>

    </div>
</div>
<style>
    .container {
        position: fixed;
        background: #1a1936;
        color: #69697f;
        height: 100%;
        min-height: 100vh;
        overflow-x: none;
        overflow-y: scroll;
        width: 300px;
    }


    .main-elements {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 20px;
    }

    .navbar-header {
        margin: 10px;
        color: #fff;
        text-align: left;
        padding-left: 20px;
    }

    .navbar-header p {
        font-size: 0.6rem;
        margin-top: -15px;
        text-transform: uppercase;
        text-align: left;
    }

    .pink-color {
        color: #ff3465;
    }

    .nav-link {
        text-decoration: none;
        padding-bottom: .2rem;
        text-transform: capitalize;
        padding-left: 15px;
        padding-top: 5px;
        font-size: 0.9rem;
    }

    .playlist-header {
        font-size: 1.2rem;
        padding: 10px;
        margin: 0;
        text-transform: uppercase;
        text-align: left;
        color: #69697f;
    }

    .fas {
        padding: 4px;
        padding-right: 10px;
    }

    .nav-link:hover {
        background-color: #ff3465;
        color: #fff;
        border-radius: 16px;
        border: none;
        width: 130px;
        padding: 6px 10px;
    }
</style>