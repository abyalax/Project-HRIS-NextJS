import Image, { StaticImageData } from "next/image";

interface CardEmployeProps {
    data: {
        nama: string,
        image: StaticImageData
    }[]
    title: string
}

const CardEmploye = ({ data, title }: CardEmployeProps) => {
    const frmtData = data.slice(0, 3)
    return (
        <div className="h-28 w-full border-2 border-slate-200 rounded-lg bg-white px-2 pt-2 pb-0">
            <h2 className="text-sm font-semibold text-gray-600">{title}</h2>
            <div className="py-4">
                <div className="relative">
                    {frmtData.map((profile, index) => (
                        <div key={`profile-${profile.nama}-${index}`} className={`absolute top-0 left-0 ${index > 0 ? `z-10` : ''} w-14 h-14 `}
                            style={{ transform: `translateX(${index * 20}px)`, }}>
                            <Image priority={true} fetchPriority="high" src={profile.image} alt="profile" className="w-10 h-10 object-cover rounded-full border-2 border-white" />
                        </div>
                    ))}
                    {data.length > 3 && (
                        <div className="absolute top-0 left-11 z-40 w-10 text-2xl pb-3 h-10 bg-slate-500 text-white border-2 border-white flex items-center justify-center rounded-full">
                            ...
                        </div>
                    )}
                </div>
                <p className="text-3xl font-semibold text-end">{data.length}</p>
            </div>
        </div>
    )
};

export default CardEmploye;