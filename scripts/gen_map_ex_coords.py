x_increment = 60.006900228223756
y_increment = 51.9675


"""
In a hexagonal grid, a hexagon can move in 6 directions.
The following matrix represents the movement of a hexagon in the grid.
The first element of the sub-array represents the x-coordinate change, and the second element represents the y-coordinate change.

Note: The y-axis is inverted in the hexagonal grid. The y-axis increases from top to bottom.

The 6 directions are:
1. Right (x+1, y)
2. Bottom Right (x, y+1)
3. Bottom Left (x-1, y+1)
4. Left (x-1, y)
5. Top Left (x, y-1)
6. Top Right (x+1, y-1)
"""

move_matrix = {
    "right": (1, 0), 
    "bottom_right": (0.5, 1),
    "bottom_left": (-1, 1),
    "left": (-1, 0),
    "top_left": (0, -1),
    "top_right": (0.5, -1)
}

def move_hex(x, y, direction):
    """
    This function moves the hexagon in the grid in the given direction.
    """
    dx, dy = move_matrix[direction]
    return x + dx, y + dy


def get_hex_coords(x, y, direction):
    """
    This function returns the x and y coordinates of the hexagon in the grid after moving in the given direction.
    """
    dx, dy = move_matrix[direction]
    return x + dx*x_increment, y + dy*y_increment


def get_hex_coords_n_times(x, y, direction, n):
    """
    This function returns the x and y coordinates of the hexagon in the grid after moving in the given direction n times.
    """
    for i in range(1, n+1):
        x, y = get_hex_coords(x, y, direction)
    return x, y


def straight_path(x, y):
    return get_hex_coords_n_times(x, y, "right", 2)


def step_up_right(x, y):
    # Move diagonally up-right by 2 hexagons
    _x, _y = get_hex_coords_n_times(x, y, "top_right", 2)
    return get_hex_coords(_x, _y, "right")  # Move right by 1 hexagon


def step_down_right(x, y):
    # Move diagonally down-right by 2 hexagons
    _x, _y = get_hex_coords_n_times(x, y, "bottom_right", 2)

    return get_hex_coords(_x, _y, "right")  # Move right by 1 hexagon
    # return _x, _y


def step_right_up(x, y):
    _x, _y = get_hex_coords_n_times(x, y, "right", 2)  # Move right by 2 hexagons
    # Move diagonally up-right by 1 hexagon
    return get_hex_coords(_x, _y, "top_right")


start_coords = (150.01725057055938, 363.77250000000004)

triage_coords = straight_path(*start_coords)


asc_1_coords = straight_path(*triage_coords)  # Decsion node
other_1_coords = step_down_right(*asc_1_coords)  # End of asc_1
_12_lead_CG = step_up_right(*asc_1_coords)  # 12 Lead ECG

clinical_assessment_1_coords = straight_path(*_12_lead_CG)  

stemi_dec_coords = straight_path(*clinical_assessment_1_coords)  # Decision node
stemi_end_coords = step_up_right(*stemi_dec_coords)  # End of stemi_dec

troponin_biomarker_1_coords = step_down_right(*stemi_dec_coords)

clinical_assessment_2_coords = straight_path(*troponin_biomarker_1_coords)


coords = {
    "start": start_coords,
    "triage": triage_coords,
    "ACS_1": asc_1_coords,
    "other_1": other_1_coords,
    "12_lead_CG": _12_lead_CG,
    "clinical_assessment_1": clinical_assessment_1_coords,
    "stemi_dec": stemi_dec_coords,
    "stemi_end": stemi_end_coords,
    "troponin_biomarker_1": troponin_biomarker_1_coords,
    "clinical_assessment_2": clinical_assessment_2_coords,
    
}

for node_name, node_coords in coords.items():
    print(f"{node_name}: {node_coords}")


# Test


