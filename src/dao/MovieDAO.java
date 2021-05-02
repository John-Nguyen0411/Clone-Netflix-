package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import com.mysql.cj.jdbc.Driver;
import connect.DBConnect1;
import model.Movie;

public class MovieDAO {

	public ArrayList<Movie> getMovie(int movie_id) 
			throws SQLException {
			 Connection connection = DBConnect1.getConnection();
			 String sql = "SELECT * FROM movie WHERE movie_id = '" + movie_id + "'";
			 PreparedStatement ps = connection.prepareCall(sql);
			 ResultSet rs = ps.executeQuery();
			 ArrayList<Movie> list = new ArrayList<>();
			 while (rs.next()) {
				 Movie movie = new Movie();
				 movie.setMovieId(rs.getInt("movie_id"));
				 movie.setNameMovie(rs.getString("name_movie"));
				 movie.setDescriptionMovie(rs.getString("description_movie"));
				 movie.setImage(rs.getString("image"));
				 movie.setTrailer(rs.getString("trailer"));
				 movie.setVideo(rs.getString("video"));
				 movie.setLo(rs.getString("lo"));
				 movie.setMaturityRating(rs.getString("maturity_rating"));
				 movie.setLastUpdate(rs.getDate("last_update"));
				 movie.setDuration(rs.getString("duration"));
				 movie.setTopHot(rs.getByte("top_hot"));
				 list.add(movie);
			 }
			 return list;
			 } 

	public static void main(String[] args) throws SQLException  {
		MovieDAO movie_dao = new MovieDAO();
		int id =2;
		 for(Movie md : movie_dao.getMovie(id)){
			 System.out.println(md.getDescriptionMovie()+"-"+ md.getImage());
		 }

	}

}