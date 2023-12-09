import React from "react";
import GitHubCalendar from "react-github-calendar";
export default function () {

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
                date.getFullYear() === currentYear &&
                monthOfDay > currentMonth - shownMonths &&
                monthOfDay <= currentMonth
            );
        });
    };
  return (
    <section className="github--section">
        <h2 className="skills--section--heading">My Github Activity</h2>
      <div style={{display:"flex" , paddingLeft:"9rem"}} className="githubConatiner">
        <div >
          <div >
            <a href="https://git.io/streak-stats">
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=Bharat-Goswami&theme=transparent&mode=weekly"
                alt="GitHub Streak"
              />
            </a>
          </div>
          <div className="react-activity-calendar"></div>
        </div>
        <div>
          <a href="https://git.io/streak-stats">
            <img
              id="github-streak-stats"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Bharat-Goswami&theme=transparent"
              alt="GitHub Streak"
            />
          </a>
        </div>

      </div>
      <GitHubCalendar
            username="1ashutoshverma"
            transformData={selectLastHalfYear}
            labels={{
                totalCount: '{{count}} commits in last 6 months',
            }}
            blockSize={19}
            blockMargin={5}
            fontSize={20}
            hideTotalCount={true}
            theme={{
                "light": [
                    "hsl(0, 0%, 92%)",
                    "rebeccapurple"
                ],
                "dark": [
                    "hsl(0, 0%, 10%)",
                    "#8667D9"
                ]
            }}
            style={{
                color: "#854CE6",
                margin: "auto",
                padding: "15px",
            }}
        />
    </section>
  );
}
