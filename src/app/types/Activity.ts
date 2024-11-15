export type ActivityType = "Running" | "Cycling" | "Swimming";

export interface Activity {
  id: string;        
  type: string;      
  duration: number;  
  date: string;
}
