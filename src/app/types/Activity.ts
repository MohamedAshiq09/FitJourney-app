export type ActivityType = "Running" | "Cycling" | "Swimming";

export interface Activity {
  id: number;        
  type: string;      
  duration: number;  
  date: string;
}
