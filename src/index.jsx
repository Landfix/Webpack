import * as $ from 'jquery'
import Post from '@models/Post'
import './styles/styles.css'
import './styles/less.less'
import './styles/sass.sass'
import './babel'
import React from 'react'
import {render} from 'react-dom'
import json from './assets/json'
import WebpackLogo from './assets/logo.png'
// import xml from './assets/data.xml'
// import csv from './assets/robertDeniro.csv'
const post = new Post('Webpack post title', WebpackLogo);

// $('pre').addClass('code').html(post.toString())
// console.log('Post to String:',post.toString())
// console.log('json:',json)

const App = () => (
    <div class="container">
    <h1>Webpack</h1>
    <hr/>
    <div class="logo"/>
    <hr/>
    <pre />
    <hr/>
    <div class="box">
        <h2>LESS</h2>
    </div>

    <div class="energy">
        <h2>SASS</h2>
    </div>
    </div>
)
render(<App/>, document.getElementById('app'))
// console.log('XML', xml)
// console.log('CSV фильмы с Робертом Дениро:',csv)