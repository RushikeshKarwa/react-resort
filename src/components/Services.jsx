import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';
export default class Services extends Component {
    state={
        services:[
            {
                icons:<FaCocktail/>,
                title:"Free cocktails",
                info:'Will provid you highballs and mocktails!'
            },
            {
                icons:<FaHiking/>,
                title:"Endless Hiking",
                info:'You will surely enjoy our magnificent view of our resort.'
            },
            {
                icons:<FaShuttleVan/>,
                title:"Free shuttle",
                info:'Enjoy the special feeling'
            },
            {
                icons:<FaBeer/>,
                title:"Strongest Beer",
                info:'chilled Beer for you for chilling!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className="service">
                            <span>{item.icons}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
