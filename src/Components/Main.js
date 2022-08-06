import React, { Component } from 'react';
import Images from './Images';
import "./Main.css"
import Fruits from './Fruits';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apple: Images[0].img1,
            orange: Images[1].img2,
            mango: Images[2].img3,
            pineapple: Images[3].img4,
            grapes: Images[4].img5,
            appleText: Fruits[0].frt1,
            orangeText: Fruits[1].frt2,
            mangoText: Fruits[2].frt3,
            pineappleText: Fruits[3].frt4,
            grapesText: Fruits[4].frt5,
            isText1: true,
            isText2: true,
            isText3: true,
            isText4: true,
            isText5: true,
            position: 0,
            count: 0
        }
        this.dragitem = React.createRef();
        this.dragOveritem = React.createRef();
    }

    dragstart(pos) {
        this.setState({
            position: pos
        })
    }

    dragEnter(pos, fruitID) {

        console.log(pos)
        console.log(fruitID)

        if (pos == 1 && fruitID == 1) {
            this.setState({
                apple: this.state.appleText,
                appleText: this.state.apple,
                isText1: !this.state.isText1
            })

        }
    };
    clickResetter = () => {
        this.setState({
            apple: Images[0].img1,
            orange: Images[1].img2,
            mango: Images[2].img3,
            pineapple: Images[3].img4,
            grapes: Images[4].img5,
            appleText: Fruits[0].frt1,
            orangeText: Fruits[1].frt2,
            mangoText: Fruits[2].frt3,
            pineappleText: Fruits[3].frt4,
            grapesText: Fruits[4].frt5,
            isText: true,
            position: 0,
            count: 0
        })

    }
    render() {


        return (
            <div className='mainDiv'>
                <h1 style={{ textAlign: 'center' }}>Pattern Matching</h1>
                <h3 style={{ textAlign: 'center' }}> Count : {this.state.count} / 5</h3>
                <div className='patternpage'>

                    <div className='image'>
                        <div className='fruits' onDragStart={() => this.dragstart(Images[0].id)} draggable="true">
                            {this.state.isText1 == true ? <img src={this.state.apple}></img> : this.state.appleText}
                        </div>
                        <div className='fruits' onDragStart={() => this.dragstart(Images[1].id)} draggable="true">
                            {this.state.isText2 == true ? <img src={this.state.orange}></img> : this.state.orangeText}
                        </div>
                        <div className='fruits' onDragStart={() => this.dragstart(Images[2].id)} draggable="true">
                            {this.state.isText3 == true ? <img src={this.state.grapes}></img> : this.state.grapesText}
                        </div>
                        <div className='fruits' onDragStart={() => this.dragstart(Images[3].id)} draggable="true">
                            {this.state.isText4 == true ? <img src={this.state.pineapple}></img> : this.state.pineappleText}
                        </div>
                        <div className='fruits' onDragStart={() => this.dragstart(Images[4].id)} draggable="true">
                            {this.state.isText5 == true ? <img src={this.state.mango}></img> : this.state.mangoText}
                        </div>
                    </div>

                    <div className='Text'>

                        <div className='fruitsName ' onDragEnd={() => this.dragEnter(this.state.position, Fruits[3].id)}>
                            {this.state.isText4 === true ? this.state.pineappleText : <img alt="PineApple" src={this.state.pineappleText}></img>}
                        </div>
                        <div className='fruitsName' onDragEnd={() => this.dragEnter(this.state.position, Fruits[2].id)}>
                            {this.state.isText5 === true ? this.state.mangoText : <img alt='Mango' src={this.state.mangoText}></img>}
                        </div>
                        <div className='fruitsName' onDragEnd={() => this.dragEnter(this.state.position, Fruits[1].id)}>
                            {this.state.isText2 === true ? this.state.orangeText : <img alt='Orange' src={this.state.orangeText}></img>}
                        </div>
                        <div className='fruitsName' onDragEnd={() => this.dragEnter(this.state.position, Fruits[4].id)}>
                            {this.state.isText3 === true ? this.state.grapesText : <img alt='Grapes' src={this.state.grapesText}></img>}
                        </div>
                        <div className='fruitsName' onDragEnd={() => this.dragEnter(this.state.position, Fruits[0].id)}>
                            {this.state.isText1 === true ? this.state.appleText : <img alt='Apple' src={this.state.appleText}></img>}
                        </div>

                    </div>

                </div>
                <button onClick={this.clickResetter} style={{ width: '90px', height: '35px', position: 'relative', left: '46%' }} type="button">Reset</button>
            </div>
        )
    }
}

export default Main 