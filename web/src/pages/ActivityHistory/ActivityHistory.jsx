import "./activityHistory.css";
import { useContext } from "react";
import Header from "../../components/Header/Header";
import { Context } from "../../uttils/FetchContextProvider";
import sort_icon from "../../images/sort_icon.png";
import ActivityItem from "../../components/ActivityItem/ActivityItem";

function ActivityHistory() {
  const { activities } = useContext(Context);

  const sortedActivities = activities.sort(
    (a,b) => new Date(b.date) - new Date(a.date)
  );
  const latestActivities = sortedActivities.slice(0,11);

  return (
    <div className="Activity-history">
      <main>
        <header>
          <Header title="Reports > Activity History" />
        </header>
        <section className="activities-container">
          <div className="left-part">
            <img src={sort_icon} id="sort-icon" />
            <div className="activities">
              {latestActivities.map((activity) => (
                <ActivityItem key={activity._id} activity={activity} />
              ))}
            </div>
          </div>
          <div className="activity-filter">
            <h1>Filter Activities</h1>
            <hr />
            <form className="activity-form">
              <label>
                <input type="radio" name="selectedFilter" defaultChecked />
                All Activity
              </label>
              <label>
                <input type="radio" name="selectedFilter" />
                Moved
              </label>
              <label>
                <input type="radio" name="selectedFilter" />
                Edited
              </label>
              <label>
                <input type="radio" name="selectedFilter" />
                Deleted
              </label>
              <label>
                <input type="radio" name="selectedFilter" />
                Created
              </label>
              <label>
                <input type="radio" name="selectedFilter" />
                Ordered
              </label>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ActivityHistory;
