import "./activityHistory.css";
import { useContext, useState } from "react";
import Header from "../../components/Header/Header";
import { Context } from "../../uttils/FetchContextProvider";
import sort_icon from "../../images/sort_icon.png";
import ActivityItem from "../../components/ActivityItem/ActivityItem";

function ActivityHistory() {
  const { activities } = useContext(Context);
  const [filter, setFilter] = useState("All");

  const sortActivities = (activities) => {
    return activities.sort(
      (a,b) => new Date(b.date) - new Date(a.date)
    );
  };

  const applyFilter = (activities, filter) => {
    if(filter == "All") {
      return activities;
    } else {
      return activities.filter(activity => activity.action === filter);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  };

  const sortedActivities = sortActivities(activities);
  const filtered = applyFilter(sortedActivities, filter);
  const latestActivities = filtered.slice(0,11);

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
                <input type="radio" name="selectedFilter" value="All" checked={filter === "All"}
                  onChange={handleFilterChange} defaultChecked />
                All Activity
              </label>
              <label>
                <input type="radio" name="selectedFilter" value="moved" checked={filter === "moved"}
                  onChange={handleFilterChange} />
                Moved
              </label>
              <label>
                <input type="radio" name="selectedFilter" value="edited" checked={filter === "edited"}
                  onChange={handleFilterChange} />
                Edited
              </label>
              <label>
                <input type="radio" name="selectedFilter" value="deleted" checked={filter === "deleted"}
                  onChange={handleFilterChange} />
                Deleted
              </label>
              <label>
                <input type="radio" name="selectedFilter" value="created" checked={filter === "created"}
                  onChange={handleFilterChange} />
                Created
              </label>
              <label>
                <input type="radio" name="selectedFilter" value="ordered" checked={filter === "ordered"}
                  onChange={handleFilterChange} />
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
