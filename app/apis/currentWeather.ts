import { config } from '@/config'
import { Cities } from '@/types/cities'
import request from '@/utils/request'

export type CurrentWeatherRequest = {
  city: Cities
}

export type CurrentWeatherResponse = {
  current: CurrentWeather,
}

type CurrentWeather = {
  last_updated_epoch: number,
  last_updated: Date,
  temp_c: number,
  temp_f: number,
  is_day: number,
  condition: CurrentWeatherCondition,
  wind_kph: number,
  wind_mph: number,
  wind_degree: number,
  wind_dir: string,
  pressure_mb: number,
  precip_mm: number,
  humidity: number,
  cloud: number,
  feelslike_c: number,
  feelslike_f: number,
  vis_km: number,
  vis_miles: number,
  uv: number,
  gust_mph: number,
  gust_kph: number,
}

type CurrentWeatherCondition = {
  text: string,
  icon: string,
  code: number,
}

export const getCurrentWeather = async (data: CurrentWeatherRequest) => {
  const res = await request().send<CurrentWeatherResponse>({
    method: 'get',
    url: `${config.url}/v1/current.json`,
    params: {
      q: data.city,
      key: config.weatherApiSecret,
      aqi: 'no'
    }
  })
  return res.data
}