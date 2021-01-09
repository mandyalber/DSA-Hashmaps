
| Cell | Val   | Notes		                                      |  
|------|-------|--------------------------------------------------| 
| 0	   | 22	   |	                                              |  
| 1	   | 88	   | collides with 22 so moves to next available slot |	 
| 2	   | empty |		                                          |  
| 3	   | empty |		                                          |  
| 4	   | 4	   |	                                              |  
| 5	   | 15	   | collides with 4 so moves to next available slot  |	 
| 6	   | 28	   |	                                              |  
| 7	   | 17	   | collides with 28 so moves to next available slot |	 
| 8	   | 59	   | collides with 15 so moves to next available slot |	
| 9	   | 31	   |			                                      |
| 10   | 10	   |		                                          |

| Val | K mod M |
|-----| --------|
| 10  | % 11 = 10 |
| 22  | % 11 = 0 |
| 31  | % 11 = 9 |
| 4   | % 11 = 4 |
| 15  | % 11 = 4 |
| 28  | % 11 = 6 |
| 17  | % 11 = 6 |
| 88  | % 11 = 0 |
| 59  | % 11 = 4 |






