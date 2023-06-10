import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props) 
            this.state = {
              categories: [
                {
                  key: 'all',
                  name: 'Всё'
                },
                {
                  key: 'Chairs',
                  name: 'Стулья'
                },
                {
                  key: 'tables',
                  name: 'Столы'
                },
                {
                  key: 'Sofa',
                  name: 'Диваны'
                },
                {
                  key: 'school-desk',
                  name: 'Парты'
                },
                {
                  key: 'armchair',
                  name: 'Кресла'
                }
              ]

            }
        
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories