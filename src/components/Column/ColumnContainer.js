import {connect} from 'react-redux';
import Column from './Column';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});
export const getCardsForColumns = ({cards}, columnId) => cards.filter(Card => Card.columnId == columnId);
export default connect(mapStateToProps)(Column);