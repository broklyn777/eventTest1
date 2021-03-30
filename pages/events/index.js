import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
// import EventsSearch from '../../components/events/events-search';

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <h1>Hejsan</h1>
  );
    // <Fragment>
    //   <EventsSearch onSearch={findEventsHandler} />
    //   <EventList items={events} />
    // </Fragment>
}

export default AllEventsPage;





// function AllEventsPage () {

//     return (
//         <div>
//             <h1>All Events</h1>
//         </div>
//     )
// }

// export default AllEventsPage