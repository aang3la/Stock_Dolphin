import "./activityHistory.css";
import { useContext } from "react";
import Header from "../../components/Header/Header";
import { Context } from "../../uttils/FetchContextProvider";

function ActivityHistory() {
  const { activities } = useContext(Context);

  return (
    <div className="Activity-history">
      <main>
        <header>
          <Header title="Reports > Activity History" />
        </header>
        <section className="activities-container">
          <div className="activities">
            {activities.map((activity) => (
              <div key={activity.id}>
                <p>
                  Admin has {activity.action} item {activity.itemId} in{" "}
                </p>
              </div>
            ))}
          </div>
          <div className="activity-filter">
            <h1>Filter Activities</h1>
            <hr />
            <form className="activity-form">
              <label>
                <input type="radio" name="selectedFilter" checked />
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
