﻿namespace CarbonAware;

public interface ICarbonAwareBase
{
    /// <summary>
    /// Returns the most recent prior emissions data record for the specified location if matching data is available.
    /// </summary>
    /// <param name="location">The name of the location to filter by.</param>
    /// <param name="time">The time to retrieve the most recent data for. Evaluate current emissions data if this value is null.</param>
    /// <param name="toTime">Optional: The end time of the time window.</param>
    /// <param name="durationMinutes">Optional: The duration over which to analyse emissions.</param>
    /// <returns>A single emissions data record for the location, and EmissionsData.None if no results are found.</returns>
    List<EmissionsData> GetEmissionsDataForLocationByTime(string location, DateTime? time, DateTime? toTime = null, int durationMinutes = 0);

    /// <summary>
    /// Returns the most recent prior emissions data record for a list of specified locations if matching data is available.
    /// </summary>
    /// <param name="locations">The name of the locations to filter by.</param>
    /// <param name="time">The time to retrieve the most recent data for. Evaluate current emissions data if this value is null.</param>
    /// <param name="toTime">Optional: The end time of the time window.</param>
    /// /// <param name="durationMinutes">Optional: The duration over which to analyse emissions.</param>
    /// <returns>A List&lt;EmissionsData&gt; for each emissions data record for each location available.  
    /// If no records are found, returns an empty List.</returns>
    List<EmissionsData> GetEmissionsDataForLocationsByTime(List<string> locations, DateTime? time, DateTime? toTime = null, int durationMinutes = 0);

    /// <summary>
    /// Returns the lowest emissions record for a list of specified locations at a specific time.
    /// </summary>
    /// <param name="location">The name of the locations to filter by.</param>
    /// <param name="time">The time to retrieve the most recent data for. Evaluate current emissions data if this value is null, otherwise this means the "fromTime" if "toTime" is provided.</param>
    /// <param name="toTime">Optional: The end time of the time window.</param>
    /// /// <param name="durationMinutes">Optional: The duration over which to analyse emissions.</param>
    /// <returns>>The matching emissions data record for the locations based on the "best" emissions 
    /// i.e. in thie case, the lowest.  Returns EmissionsData.  May be mutliple emissions results and times if
    /// the emissions are equal.</returns>
    List<EmissionsData> GetBestEmissionsDataForLocationsByTime(List<string> locations, DateTime? time, DateTime? toTime = null, int durationMinutes = 0);

    /// <summary>
    /// Record base data for calculating Software Carbon Intensity (SCI).
    /// </summary>
    /// <param name="data">SCI base data</param>
    void RecordSCIBaseData(SCIBaseData data);

    /// <summary>
    /// Returns SCI base data with the given GUID value.
    /// </summary>
    /// <param name="guid">GUID value which you want.</param>
    /// <returns>SCI base data with the given GUID value.</returns>
    SCIBaseData GetSCIBaseDataByGuid(Guid guid);

    /// <summary>
    /// Returns SCI base data list within a specified date time.
    /// </summary>
    /// <param name="from">Start time to retrieve SCI base data.</param>
    /// <param name="to">End time to retrieve SCI base data. Current date time will be used if this value is null.</param>
    /// <returns></returns>
    List<SCIBaseData> GetSCIBaseDataByDateTime(DateTime from, DateTime? to);
}
