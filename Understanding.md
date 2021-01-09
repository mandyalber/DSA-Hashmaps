### 1. 

Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 using open addressing and a hash function k mod m, where k is the key and m is the length.

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

### 2.

Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. Let the hash table have a length m = 9, and let the hash function be k mod m.

|Cell|	Val	|Notes|
|----|-----|------|
| 0	| empty|	|
| 1	| 28 -> 19 -> 10|	19 and 10 collide and are added to linked list|
| 2 |	20	||
| 3 |	12	||
| 4 |	empty	||
| 5 |	5	||
| 6 |	15 -> 33	|33 collides and is added to linked list|
| 7 |	empty	||
| 8 |	17	||

| Val | K mod M |
|-----|---------|
| 5 |	% 9 = 5 |
| 28 |	% 9 = 1 |
| 19 |	% 9 = 1 |
| 15 |	% 9 = 6 |
| 20 |	% 9 = 2 |
| 33 |	% 9 = 6 |
| 12 |	% 9 = 3 |
| 17 |	% 9 = 8 |
| 10 | % 9 = 1 |




