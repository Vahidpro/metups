import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function Homepage() {
	function addMeetupHandler(enterdMeetupData) {
		console.log(enterdMeetupData);
	}
	return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}

export default Homepage;
