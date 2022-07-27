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
            isText: true,
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

        if (pos === fruitID) {
            switch (pos) {
                case 1:
                    this.setState(
                        {
                            ...this.state.grapes,
                            ...this.state.grapesText,
                            ...this.state.mango,
                            ...this.state.mangoText,
                            ...this.state.orange,
                            ...this.state.orangeText,
                            ...this.state.pineapple,
                            ...this.state.pineappleText,
                            ...this.state.position,
                            apple: "",
                            appleText: Images[0].img1,
                            isText: false,
                            count: this.state.count + 1

                        }

                    )
                    break;
                case 2:
                    this.setState(
                        {
                            ...this.state.apple,
                            ...this.state.appleText,
                            ...this.state.grapes,
                            ...this.state.grapesText,
                            ...this.state.mango,
                            ...this.state.mangoText,
                            ...this.state.pineapple,
                            ...this.state.pineappleText,
                            ...this.state.position,
                            orange: "",
                            orangeText: Images[1].img2,
                            isText: false,
                            count: this.state.count + 1
                        }

                    )
                    break;
                case 3:
                    this.setState(
                        {
                            ...this.state.apple,
                            ...this.state.appleText,
                            ...this.state.grapes,
                            ...this.state.grapesText,
                            ...this.state.orange,
                            ...this.state.orangeText,
                            ...this.state.pineapple,
                            ...this.state.pineappleText,
                            ...this.state.position,
                            mango: "",
                            mangoText: Images[2].img3,
                            isText: false,
                            count: this.state.count + 1
                        }

                    )
                    break;
                case 4:
                    this.setState(
                        {
                            ...this.state.apple,
                            ...this.state.appleText,
                            ...this.state.grapes,
                            ...this.state.grapesText,
                            ...this.state.mango,
                            ...this.state.mangoText,
                            ...this.state.orange,
                            ...this.state.orangeText,
                            ...this.state.position,
                            pineapple: "",
                            pineappleText: Images[3].img4,
                            isText: false,
                            count: this.state.count + 1
                        }

                    )
                    break;
                case 5:
                    this.setState(
                        {
                            ...this.state.apple,
                            ...this.state.appleText,
                            ...this.state.mango,
                            ...this.state.mangoText,
                            ...this.state.orange,
                            ...this.state.orangeText,
                            ...this.state.pineapple,
                            ...this.state.pineappleText,
                            ...this.state.position,
                            grapes: "",
                            grapesText: Images[4].img5,
                            isText: false,
                            count: this.state.count + 1
                        }

                    )
                    break;
                default:
                    this.setState(
                        {
                            apple: Images[0].img1,
                            orange: Images[1].img2,
                            mango: Images[2].img3,
                            pineapple: Images[3].img4,
                            grapes: Images[4].img5,
                            appleText: Fruits[0].frt1,
                            orangeText: Fruits[1].frt2,
                            mangoText: Fruits[2].frt3,
                            pineappleText: Fruits[3].frt4,
                            grapesText: Fruits[4].frt5
                        }
                    )
            }

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
                            <img src={this.state.apple}></img>
                        </div>
                        <div className='fruits' onDragStart={() => this.dragstart(Images[1].id)} draggable="true">
                            <img src={this.state.orange}></img>
                        </div>
                        <div className='fruits' onDragStart={() => this.dragstart(Images[2].id)} draggable="true">
                            <img src={this.state.mango}></img>
                        </div>
                        <div className='fruits' onDragStart={() => this.dragstart(Images[3].id)} draggable="true">
                            <img src={this.state.pineapple}></img>
                        </div>
                        <div className='fruits' onDragStart={() => this.dragstart(Images[4].id)} draggable="true">
                            <img src={this.state.grapes}></img>
                        </div>
                    </div>

                    <div className='Text'>

                        <div className='fruitsName ' onDragEnter={() => this.dragEnter(this.state.position, Fruits[3].id)}>
                            {this.state.isText === true ? this.state.pineappleText : <img alt="PineApple" src={this.state.pineappleText}></img>}
                        </div>
                        <div className='fruitsName' onDragEnter={() => this.dragEnter(this.state.position, Fruits[2].id)}>
                            {this.state.isText === true ? this.state.mangoText : <img alt='Mango' src={this.state.mangoText}></img>}
                        </div>
                        <div className='fruitsName' onDragEnter={() => this.dragEnter(this.state.position, Fruits[1].id)}>
                            {this.state.isText === true ? this.state.orangeText : <img alt='Orange' src={this.state.orangeText}></img>}
                        </div>
                        <div className='fruitsName' onDragEnter={() => this.dragEnter(this.state.position, Fruits[4].id)}>
                            {this.state.isText === true ? this.state.grapesText : <img alt='Grapes' src={this.state.grapesText}></img>}
                        </div>
                        <div className='fruitsName' onDragEnter={() => this.dragEnter(this.state.position, Fruits[0].id)}>
                            {this.state.isText === true ? this.state.appleText : <img alt='Apple' src={this.state.appleText}></img>}
                        </div>

                    </div>

                </div>
                <button onClick={this.clickResetter} style={{ width: '90px', height: '35px', position: 'relative', left: '46%' }} type="button">Reset</button>
            </div>
        )
    }
}

export default Main 