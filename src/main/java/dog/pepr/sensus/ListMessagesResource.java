package dog.pepr.sensus;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

@Path("/ListMessages/")
public class ListMessagesResource {

	@GET
	public String hello() {
		return "getting list messages";
	}

	@GET
	@Path("/books")
	public String getBooks() {
		return "books";
	}

	@GET
	@Path("/book/{isbn}")
	public String getBook(@PathParam("isbn") String id) {
		return "11123";
	}
}
