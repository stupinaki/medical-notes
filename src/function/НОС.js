
function someName(WrappedComponent) {
    return function ComponentName(props) {
        //может быть что угодно, в зависимости от необходимости, например получать стейт:
        // const {state, setState} = useState()
        //или использовать useEffect чтобы подписаться/ отписаться от чего-то
        return (
            // проспы передаются как: <WrappedComponent имя пропса={значение пропса}/>
            <WrappedComponent {...props} />
        )
    }
}


// function someName(WrappedComponent) {
//     return class extends React.Component {
//         componentDidUpdate(prevProps) {
//             console.log('Текущие пропсы: ', this.props);
//             console.log('Предыдущие пропсы: ', prevProps);
//         }
//         render() {
//             // Оборачиваем компонент в контейнер без мутаций. Супер!
//             return <WrappedComponent {...this.props} />;
//         }
//     }
// }