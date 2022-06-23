type RoverName = 'Curiosity' | 'Opportunity' | 'Spirit';
type Status = 'active' | 'complete';

type CamAbbr =
    | 'FHAZ'
    | 'RHAZ'
    | 'MAST'
    | 'CHEMCAM'
    | 'MAHLI'
    | 'MARDI'
    | 'NAVCAM'
    | 'PANCAM'
    | 'MINITES';

type CamDesc = {
    [K in CamAbbr]: string;
};

interface RoverInformation {
    landing_date: string;
    max_date: string;
    max_sol: number;
    name: RoverName;
}

interface RoverManifest extends RoverInformation {
    launch_date: string;
    photos: PhotosInfo[];
    status: Status;
    total_photos: number;
}

interface PhotosInfo {
    cameras: CamAbbr[];
    earth_date: DateString;
    sol: number;
    total_photos: number;
}

interface Rover {
    id: number;
    name: RoverName;
    landing_date: string;
    launch_date: string;
    status: Status;
}

interface AvailableCams {
    [name: string]: CamAbbr[];
}

interface Camera {
    id: number;
    name: RoverName;
    rover_id: number;
    full_name: string;
}

interface Photo {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: string;
    rover: Rover;
}

interface UserInputs {
    solOrDate: number | string;
    pages: number;
    camera: CamAbbr;
}

type RoverPhotos = Photo[];

type Sol = number;

type DateString =
    `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export type {
    RoverName,
    CamAbbr,
    CamDesc,
    RoverInformation,
    RoverManifest,
    Photo,
    RoverPhotos,
    Camera,
    Rover,
    AvailableCams,
    UserInputs,
    DateString,
    Sol,
};
