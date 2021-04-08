import PropTypes from "prop-types";

export function WeeklyForm() {
  return (
    <form>
      <label htmlFor="date">Date</label>
      <input id="date" type="date" required />
      <br />
      <label htmlFor="weekly_work_schedule__total_hours_highway_operator">Highway operator hours</label>
      <input id="weekly_work_schedule__total_hours_highway_operator" type="number" step="0.01" required />
      <br />
      <label htmlFor="weekly_work_schedule__total_hours_bus_operator">Bus operator hours</label>
      <input id="weekly_work_schedule__total_hours_bus_operator" type="number" step="0.01" required />
      <br />
      <label htmlFor="weekly_work_schedule__total_hours_city_operator">City operator hours</label>
      <input id="weekly_work_schedule__total_hours_city_operator" type="number" step="0.01" required />
      <br />
      <label htmlFor="weekly_work_schedule__total_hours_other">Other hours</label>
      <input id="weekly_work_schedule__total_hours_other" type="number" step="0.01" required />
      <br />
      <label htmlFor="weekly_work_schedule__total_holiday_days_in_period">Number of holidays</label>
      <input id="weekly_work_schedule__total_holiday_days_in_period" type="number" required />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
