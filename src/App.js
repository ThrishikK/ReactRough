import InputElement from './myComponents/ClassComponent'

const App = () => <InputElement />

export default App

// import {Component} from 'react'
// import Selected from './components/Selected'

// import './App.css'

// const initialselectedList = [
//   {
//     id: 1,
//     text: 'One',
//     isFavorite: false,
//   },
//   {
//     id: 2,
//     text: 'Two',
//     isFavorite: false,
//   },
//   {
//     id: 3,
//     text: 'Three',
//     isFavorite: false,
//   },
// ]

// class App extends Component {
//   state = {
//     selectedList: initialselectedList,
//   }

//   toggleIsFavorite = id => {
//     console.log(`Button ${id} Clicked`)
//     this.setState(prevState => ({
//       selectedList: prevState.selectedList.map(eachSelectBtn => {
//         if (id === eachSelectBtn.id) {
//           return {...eachSelectBtn, isFavorite: !eachSelectBtn.isFavorite}
//         }
//         return eachSelectBtn
//       }),
//     }))
//   }

//   render() {
//     const {selectedList} = this.state

//     return (
//       <div className="main-container">
//         <h1>Ticks</h1>
//         <ul className="unordered-list-styles">
//           {selectedList.map(eachItem => (
//             <Selected
//               key={eachItem.id}
//               selectDetails={eachItem}
//               toggleIsFavorite={this.toggleIsFavorite}
//             />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default App
