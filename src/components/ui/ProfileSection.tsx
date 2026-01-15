import { useDataContext } from "../../contexts/DataContext";

interface ProfileSectionProps {
  showStats?: boolean;
  showBio?: boolean;
  className?: string;
}

export function ProfileSection({
  showStats = true,
  showBio = true,
  className = "",
}: ProfileSectionProps) {
  const { userProfile } = useDataContext();

  return (
    <div className={`profile-section ${className}`}>
      <div className="profile-header">
        <img
          src={userProfile.avatar}
          alt={userProfile.name}
          className="profile-avatar"
        />
        <div className="profile-info">
          <h1 className="profile-name">{userProfile.name}</h1>
          <p className="profile-email">{userProfile.email}</p>
          <p className="profile-location">📍 {userProfile.location}</p>
          <p className="profile-join-date">
            Member since{" "}
            {new Date(userProfile.joinDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>
      </div>

      {showBio && (
        <div className="profile-bio">
          <h2 className="profile-bio-title">About</h2>
          <p className="profile-bio-text">{userProfile.bio}</p>
        </div>
      )}

      {showStats && (
        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-value">
              {userProfile.stats.orders}
            </span>
            <span className="profile-stat-label">Orders</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-value">
              {userProfile.stats.reviews}
            </span>
            <span className="profile-stat-label">Reviews</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-value">
              {userProfile.stats.wishlist}
            </span>
            <span className="profile-stat-label">Wishlist</span>
          </div>
        </div>
      )}
    </div>
  );
}
