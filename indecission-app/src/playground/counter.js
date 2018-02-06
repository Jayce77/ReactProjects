class Counter extends React.Component {

    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)

        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('counter')
        const currentCount = parseInt(stringCount)
        if(!isNaN(currentCount)){
            this.setState(() =>{
                return {
                    counter: currentCount
                }
            })
        } 
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.counter !== this.state.counter) localStorage.setItem('counter', this.state.counter)
    }
    
    handleAddOne() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    handleReset()  {
        this.setState((prevState) => {
            return {
                counter: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter counter={5}/>, document.getElementById('app'))

// let count = 0
// const addOne = () => {
//     count++
//     renderCounterApp()
// }
// const minusOne = () => {
//     count--
//     renderCounterApp()
// }
// const reset = () => {
//     count = 0
//     renderCounterApp()
// }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () =>  {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()